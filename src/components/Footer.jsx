const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-border px-6 py-6 text-center md:flex-row md:gap-4 md:px-[100px] md:py-7 md:text-left">
      <div className="text-base font-bold text-text-primary">
        Shaveen<span className="text-accent">.</span>
      </div>
      <p className="text-[13px] text-text-muted">
        © 2025 Shaveen Kumar · Chennai, India
      </p>
      <div className="flex gap-2.5">
        <a
          href="https://github.com/shaveen08"
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-bg-card text-xs font-bold text-text-secondary no-underline transition-colors duration-200 hover:border-accent hover:bg-accent-dim hover:text-accent"
          title="GitHub"
        >
          GH
        </a>
        <a
          href="https://www.behance.net/"
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-bg-card text-xs font-bold text-text-secondary no-underline transition-colors duration-200 hover:border-accent hover:bg-accent-dim hover:text-accent"
          title="Behance"
        >
          Be
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-bg-card text-xs font-bold text-text-secondary no-underline transition-colors duration-200 hover:border-accent hover:bg-accent-dim hover:text-accent"
          title="LinkedIn"
        >
          in
        </a>
      </div>
    </footer>
  );
};

export default Footer;
