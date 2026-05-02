export function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={small ? "28" : "36"}
        height={small ? "28" : "36"}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]"
      >
        <defs>
          <linearGradient id="privymeetGradient" x1="8" y1="8" x2="56" y2="56">
            <stop stopColor="#8B5CF6" />
            <stop offset="0.5" stopColor="#D946EF" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <rect
          x="10"
          y="10"
          width="24"
          height="24"
          rx="12"
          stroke="url(#privymeetGradient)"
          strokeWidth="5"
        />
        <rect
          x="30"
          y="30"
          width="24"
          height="24"
          rx="12"
          stroke="url(#privymeetGradient)"
          strokeWidth="5"
        />
        <path
          d="M28 36C28 31.5817 31.5817 28 36 28"
          stroke="url(#privymeetGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      <div className="leading-none">
        <div className="text-lg font-semibold tracking-tight text-white">
          PrivyMeet
        </div>
        <div className="text-xs text-white/50">
          private event networking
        </div>
      </div>
    </div>
  );
}