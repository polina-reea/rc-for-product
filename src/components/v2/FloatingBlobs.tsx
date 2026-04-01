export function FloatingBlobs({ color = "blue" }: { color?: "blue" | "red" | "green" | "mixed" }) {
  const colors = {
    blue: {
      blob1: "rgba(87, 108, 219, 0.15)",
      blob2: "rgba(74, 61, 220, 0.1)",
    },
    red: {
      blob1: "rgba(242, 84, 91, 0.12)",
      blob2: "rgba(242, 84, 91, 0.08)",
    },
    green: {
      blob1: "rgba(17, 212, 131, 0.12)",
      blob2: "rgba(17, 212, 131, 0.08)",
    },
    mixed: {
      blob1: "rgba(87, 108, 219, 0.13)",
      blob2: "rgba(242, 84, 91, 0.1)",
    },
  };

  const c = colors[color];

  return (
    <>
      <div
        className="absolute pointer-events-none w-[700px] h-[700px] max-md:w-[400px] max-md:h-[400px] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(circle, ${c.blob1} 0%, transparent 70%)`,
          top: "-20%",
          right: "-10%",
          animation: "v2float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none w-[600px] h-[600px] max-md:w-[350px] max-md:h-[350px] rounded-full blur-[60px]"
        style={{
          background: `radial-gradient(circle, ${c.blob2} 0%, transparent 70%)`,
          bottom: "-15%",
          left: "-8%",
          animation: "v2float 10s ease-in-out infinite 2s",
        }}
      />
    </>
  );
}
