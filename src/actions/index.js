export const selectQuote =(quote)=>{
    console.log("selct quote", quote.fname)
    return {
        type: "SELECT_QUOTE",
        payload: quote
    }
};

export default selectQuote;