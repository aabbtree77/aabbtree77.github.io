import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

type Guest = {
  date: string;
  time: string;
  city: string;
  country: string;
};

export default function VisitorsOverlay() {
  const [data, setData] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://miniguestlog.onrender.com/guests")
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => navigate("/")}
    >
      <div
        className="relative h-1/4 w-1/4 min-w-[300px] overflow-auto rounded-lg bg-neutral p-4 text-center text-amber-700"
        onClick={(e) => e.stopPropagation()}
      >
        {loading && <Spinner />}

        {!loading && error && <p>Error loading visitor data.</p>}

        {!loading && !error && (
          <>
            {data.map((item, i) => (
              <p key={i}>
                {i}. {item.date} {item.time}, {item.city}, {item.country}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
