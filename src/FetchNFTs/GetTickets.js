import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

function allTickets(chain, address) {
  const [value, setValue] = useState([]);
  const [total, setTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, Moralis } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(true);
      Moralis.Web3API.account
        .getNFTs({ chain: chain, address: address })
        .then((data) => {
          let tickets = data.result.filter((data) => data.symbol === "NFTKTS");
          setValue(tickets);
          setTotal(tickets.length);
          setIsLoading(false);
        });
    }
  }, [isAuthenticated, Moralis, chain, address]);

  return [value, total, isLoading];
}

export default allTickets;
