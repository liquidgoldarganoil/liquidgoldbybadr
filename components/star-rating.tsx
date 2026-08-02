import { Star } from "lucide-react";

export function StarRating({ rating, reviews }: { rating: number; reviews?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < rating
                ? "h-3.5 w-3.5 fill-gold-400 text-gold-400"
                : "h-3.5 w-3.5 text-gold-400/20"
            }
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-ivory/50">({reviews})</span>
      )}
    </div>
  );
}
