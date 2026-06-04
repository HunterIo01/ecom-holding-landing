import { useState, useEffect } from "react";

export function UrgencyBar() {
  const MINUTES = 7;
  const [seconds, setSeconds] = useState(MINUTES * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) return MINUTES * 60;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="w-full bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium flex items-center justify-center gap-3">
      <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
      <span>
        Últimas <strong>2 vacantes</strong> disponibles — La postulación cierra en{" "}
        <strong className="text-accent font-mono">{mins}:{secs}</strong>
      </span>
      <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
    </div>
  );
}
