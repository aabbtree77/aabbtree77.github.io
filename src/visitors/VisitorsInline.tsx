import { useEffect, useState } from "react";

type Guest = {
  date: string;
  time: string;
  city: string;
  country: string;
};

export default function VisitorsInline() {
  const [data, setData] = useState<Guest[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://miniguestlog.onrender.com/guests")
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((d) => setData(d))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p className="mt-3 text-red-400">Failed to load visitors.</p>;
  }

  if (!data) {
    return (
      <p className="mt-3 italic opacity-80">
        Fetching visitors, may take a couple of minutes…
      </p>
    );
  }

  return (
    <div className="mt-3 space-y-1 text-base text-gray-300">
      {data.map((item, i) => (
        <p key={i}>
          {i}. {item.date} {item.time}, {item.city}, {item.country}
        </p>
      ))}
    </div>
  );
}
