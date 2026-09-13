import { useEffect, useState } from 'react';
import { profile } from '../data';

// NOTE: This is a client-side-only gate for keeping casual visitors off this
// page — it is NOT real security. Both credentials ship inside this page's
// public JS bundle, so anyone who opens dev tools can read them or skip the
// check entirely. Never rely on this to protect anything actually sensitive.
const DASHBOARD_USERNAME = 'divyanshuportfolio';
const DASHBOARD_PASSWORD = 'Divyanshu@123';
const SESSION_KEY = 'dashboard_authed';

// Point this at a published data source for real contact-form submissions,
// e.g. a Google Form's response Sheet published as CSV:
//   File > Share > Publish to web > select the responses sheet > CSV
// then paste the resulting URL here. Left empty until a form is connected —
// the dashboard shows an honest "not connected" state instead of fake data.
const SUBMISSIONS_SOURCE_URL = '';

function parseCsv(text) {
  const rows = text
    .trim()
    .split('\n')
    .map((line) => line.split(',').map((cell) => cell.replace(/^"|"$/g, '').trim()));
  const [header, ...body] = rows;
  return body.map((row) => Object.fromEntries(row.map((cell, i) => [header[i], cell])));
}

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === DASHBOARD_USERNAME && password === DASHBOARD_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setError('');
      onLogin();
    } else {
      setError('Incorrect ID or password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 select-none">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 space-y-6 shadow-2xl"
      >
        <div className="space-y-1 text-center">
          <div className="text-xl font-black text-red-600 tracking-tighter">
            {profile.brand}
            <span className="text-white">.</span>
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-white/50">Restricted Dashboard</p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ID"
            autoComplete="username"
            className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 text-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            className="w-full bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-red-600 transition-colors placeholder-white/40 text-white"
          />
        </div>

        {error && <p className="text-xs text-red-500 font-mono">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const StatCard = ({ label, value }) => (
  <div className="bg-[#141414]/90 border border-white/10 rounded-xl p-6">
    <div className="text-3xl font-black text-white truncate">{value}</div>
    <div className="text-xs font-mono uppercase tracking-widest text-white/50 mt-1">{label}</div>
  </div>
);

const DashboardView = ({ onLogout }) => {
  const [submissions, setSubmissions] = useState([]);
  const [status, setStatus] = useState(SUBMISSIONS_SOURCE_URL ? 'loading' : 'unconfigured');

  useEffect(() => {
    if (!SUBMISSIONS_SOURCE_URL) return;
    fetch(SUBMISSIONS_SOURCE_URL)
      .then((res) => res.text())
      .then((text) => {
        setSubmissions(parseCsv(text));
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 md:px-12 py-10 select-none">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-black text-red-600 tracking-tighter">
              {profile.brand}
              <span className="text-white">.</span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/50">Portfolio Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="../"
              className="px-4 py-2 rounded border border-white/20 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white hover:border-red-600 transition-colors"
            >
              View Site
            </a>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded border border-white/20 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white hover:border-red-600 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Total Messages" value={submissions.length} />
          <StatCard label="Data Source" value={SUBMISSIONS_SOURCE_URL ? 'Connected' : 'Not Set'} />
          <StatCard label="Status" value={status} />
          <StatCard label="Last Checked" value={status === 'ready' ? new Date().toLocaleTimeString() : '—'} />
        </div>

        <div className="bg-[#141414]/90 border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-4">
            Contact Form Submissions
          </h2>

          {status === 'unconfigured' && (
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-2xl">
              No form data source is connected yet. This static site has nowhere to store messages on its own —
              connect a real form backend (e.g. a Google Form, whose responses land in a Google Sheet you can
              publish to the web as CSV) and set <code className="text-white/80">SUBMISSIONS_SOURCE_URL</code> in{' '}
              <code className="text-white/80">src/dashboard/Dashboard.jsx</code> to that published CSV link. Once
              set, submissions will appear here automatically.
            </p>
          )}
          {status === 'loading' && <p className="text-sm text-white/60 font-light">Loading submissions…</p>}
          {status === 'error' && (
            <p className="text-sm text-red-400 font-light">Couldn't load submissions from the configured source.</p>
          )}
          {status === 'ready' && submissions.length === 0 && (
            <p className="text-sm text-white/60 font-light">No messages yet.</p>
          )}
          {status === 'ready' && submissions.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-white/50 font-mono text-xs uppercase tracking-wider border-b border-white/10">
                    {Object.keys(submissions[0]).map((key) => (
                      <th key={key} className="py-2 pr-4">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      {Object.values(row).map((val, j) => (
                        <td key={j} className="py-2 pr-4 text-white/80">
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1');

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
  };

  return authed ? <DashboardView onLogout={handleLogout} /> : <LoginForm onLogin={() => setAuthed(true)} />;
};

export default Dashboard;
