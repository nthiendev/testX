import { ReactNode } from "react";

const Line = ({ children }: { children: ReactNode }) => (
  <p className="text-2xl font-bold mb-2">{children}</p>
);

const Congratulation = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ width: 941 }}>
        <Line>
          1. Nút &apos;connect wallet&apos;: connect with Petra wallet (ví trên
          blockchain network Aptos)
        </Line>
        <Line>2. Nút ‘Log in’: allow users to log in using Google</Line>
        <Line>
          3. Nút &apos;Launch App&apos;: once users log in, send them to the
          #test2 page (this page). if users haven&apos;t logged in, don&apos;t
          let them see the second page
        </Line>
        <Line>
          4. Photoshop phần white part out &apos;testX&apos; logo và dùng chữ
          test X =&gt; cho phần &apos;Explore and Earn on testX&apos;
        </Line>
        <Line>5. The next step is to deploy your work on vercel.</Line>
        <Line>6. Block access for IP from Japan.</Line>
        <Line>
          7. Share the vercel link along with your code (github link to the
          repo).
        </Line>

        <h1 className="text-4xl mt-20">
          CONGRATS ON PASSING THE CODING INTERVIEW!
        </h1>
      </div>
    </div>
  );
};

export default Congratulation;
