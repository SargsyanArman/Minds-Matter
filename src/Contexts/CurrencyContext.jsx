import { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/";

    const CURRENCIES = {
        am: { currName: 'AMD', currSymbol: '֏' },
        ru: { currName: 'RUB', currSymbol: '₽' },
        eu: { currName: 'EUR', currSymbol: '€' },
        us: { currName: 'USD', currSymbol: '$' }
    }

    const exchangeCache = new Map();
    const [curr, setCurr] = useState(CURRENCIES.us);
    const [currMenu, setCurrMenu] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(1);


    const changeCurr = (newCurrName) => {
        for (const obj in CURRENCIES) {
            if (CURRENCIES[obj].currName === newCurrName) {
                setCurr({ ...CURRENCIES[obj] });
                return;
            }
        }
    };

    const exchange = (amount, base) => {
        if (base === curr.currName) {
            if (exchangeRate != 1) {
                setExchangeRate(1.00);
            }
        } else {
            let key = `${base}_to_${curr.currName}`;
            if (!exchangeCache.has(key)) {
                console.log(`has no ${key}`);
                const from = base.toLowerCase();
                const to = curr.currName.toLowerCase();
                const URL = `${BASE_URL}${from}.json`;
                fetch(URL).then((response) => response.json()).then((response) => {
                    setExchangeRate(response[from][to].toFixed(2));
                });
                exchangeCache.set(key, exchangeRate);
            } else {
                console.log(`has ${key}`);
                if (exchangeRate != exchangeCache.get(key)) {
                    setExchangeRate(exchangeCache.get(key).toFixed(2));
                }
            }
        }

        return amount * exchangeRate;
    };

    return (
        <CurrencyContext.Provider
            value={{
                curr,
                currMenu,
                setCurrMenu,
                exchange,
                changeCurr
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};
