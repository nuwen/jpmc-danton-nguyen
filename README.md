# Danton Nguyen - Submission

To run application
- run `npm install` to install dependencies
- run `npm run dev` in terminal
- navigate to `http://localhost:5173/` in browser

To run tests
- run `npm test` to run tests



# Front End Engineer Technical Assessment

## Specification

Build a single-page application that represents a table of financial instruments.

### Table Capabilities

#### Sorting
- By **Asset Class**: Commodities first, then Equities, and Credit last.
- By **Price**: In descending order.
- By **Ticker**: In alphabetical order.

#### Presentation
- Rows should be colour-coded by **Asset Class**:
  - Commodities = White
  - Equities = Blue
  - Credit = Green
- **Price** values:
  - Display in **blue** if positive.
  - Display in **red** if negative.

### Data Format

You may assume an API exists which provides financial instrument data in the following JSON-encoded format:

```json
[
  {
    "ticker": "ALPHA",
    "price": 3150.67, 
    "assetClass": "Credit"
  }, 
  {
    "ticker": "BETA",
    "price": 3791.37,
    "assetClass": "Equities"
  }
]
