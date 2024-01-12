import React, { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <code className="footer">
        Copyright &copy; {currentYear} - kitembe technologies. All Rights Reserved.
      </code>
    </footer>
  );
}
