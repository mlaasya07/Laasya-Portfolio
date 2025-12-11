# L-EDGER Dashboard

A comprehensive personal ledger management system with password protection, data visualization, and encryption utilities.

## Folder Structure

```
ledger/
├── README.md           # This file
├── ledger.js           # Shared data and utility functions
├── dashboard.html      # Main ledger dashboard (password-protected)
├── reserve.html        # Reserve tracking & analytics dashboard with charts
└── cipher.html         # Encoder/decoder utility for data encryption
```

## Contents

### `dashboard.html`
The main password-protected ledger dashboard. Features include:
- Secure password lock screen
- Dark monospace interface (Roboto Mono)
- Complete transaction table with filtering
- Search functionality across all entries
- Color-coded transaction statuses (Paid, Pending, Overdue)
- Tag system for remarks and categorization
- CSV export functionality

**Color Scheme:**
- Background: `#0d0d0d`
- Cards: `#1a1a1a`
- Accent Red: `#7c2323`
- Text: `#eaeaea`

### `reserve.html`
Analytics and reserve tracking dashboard with visual data representation. Features include:
- Tab-based interface for different views
- Chart.js integration for data visualization
- Loan summary statistics
- Yellow text accent (`#ffe989`) for contrast
- Shared data source from `ledger.js`
- Grid-based card layout for organized information display

**Key Colors:**
- Background: `#0d0d0d`
- Cards: `#1a1a1a`
- Text: `#ffe989` (golden yellow)
- Accent: `#7c2323`

### `cipher.html`
An encoder/decoder utility for secure text encryption/decryption:
- Text encoding and decoding functionality
- Red/maroon themed interface (`#7c2323`)
- Gradient background with glass-morphism effects
- Responsive design with max-width container
- Useful for securing sensitive ledger notes or data

## Usage

Open either HTML file in a web browser:
- **ledger.html** - Access your ledger dashboard (password protected)
- **cipher.html** - Encode/decode text for secure data management

## Technical Details

- **Framework:** Vanilla HTML/CSS/JavaScript
- **Font:** Inter, Roboto Mono (Monospace)
- **Styling:** Dark mode / Dark color scheme
- **Responsive:** Mobile-friendly viewport settings

## Role-Code Assignment Logic

The ledger dashboard uses an intelligent code generation system to track and identify loaners and seekers:

### Code Structure
Each person receives a **permanent 2-digit number** (01, 02, 03, etc.) assigned in the order they appear in the ledger.

Codes are generated based on their current role:
- **L01, L02, etc.** - Person acting as a Loaner
- **S01, S02, etc.** - Person acting as a Seeker
- **LS01, SL02, etc.** - Person who has transitioned between roles

### Role Transition Rules

1. **First Appearance** - Generate primary code (L or S) + number
   - Example: RAMESH first appears as loaner → `L01`
   - Example: SURESH first appears as seeker → `S01`

2. **Same Role Repeated** - Keep the same code
   - If RAMESH is loaner again → `L01` (unchanged)

3. **Role Transition** - Add transition prefix
   - If RAMESH (previously `L01`) becomes seeker → `LS01`
   - If SURESH (previously `S01`) becomes loaner → `SL01`

### Example Scenario

```
Transaction 1: RAMESH (Loaner) → SURESH (Seeker)
  Codes: L01, S01

Transaction 2: KARAN (Loaner) → PRIYA (Seeker)
  Codes: L02, S02

Transaction 3: KARAN (Loaner) → ANITA (Seeker)
  Codes: L02, S03

Transaction 4: SURESH (Loaner) → VIJAY (Seeker)
  Codes: SL01 (transitioned from seeker to loaner), S04
```

### Purpose

This system allows tracking of:
- **Historical relationships** - Who has loaned to whom
- **Role evolution** - When someone switches from borrowing to lending
- **Permanent identification** - Consistent numbering across all transactions
- **Data integrity** - CSV exports use the same code generation logic

## Notes

Both files use modern CSS features including:
- CSS variables for theming
- Flexbox layouts
- Gradient backgrounds
- Box shadows and border effects

The ledger uses vanilla JavaScript for role-code generation, search filtering, and CSV export functionality.
