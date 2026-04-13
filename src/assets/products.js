// products.js — Add your real products here
// Each product needs: id, name, logo, tagline, description, heroColor, screenshots[]

const products = [
  {
  id: 'secret-track',
  name: 'Secret Track',
  logo: '/logos/strack/icon.png',
  tagline: 'Your money. Your secret.',
  description:
    'Secret Track is a fully offline, privacy-first personal finance app. No accounts, no cloud, no tracking — every rupee you earn and spend stays on your device. It covers wallets, budgets, subscriptions, warranties, goals, debts, bill splitting, SMS-based transaction detection, receipt scanning, and a beautiful monthly Wrapped recap.',
  heroColor: '#7c6dfa',

  screenshots: [
    // ── 1. HOME ──────────────────────────────────────────────────────
    {
      image: '/logos/strack/image1.png',
      title: 'Home Dashboard',
      description:
        'Your financial command centre. The Home screen shows your total wallet balance, this month\'s income vs expenses, a Financial Health Score, a "Safe to Spend Today" card, a 7-day spending trend bar chart, and quick wallet cards. Everything updates the moment you add a transaction — no refresh needed.'
    },

    // ── 2. BUDGET ────────────────────────────────────────────────────
    {
      image: '/logos/strack/image3.png',
      title: 'Budget Tracker',
      description:
        'Set monthly spending limits for any category. A donut chart shows how much of your budget you\'ve used at a glance. Below the chart you\'ll find per-category progress bars, Remaining, Per Day Left, and Days Left counters. Navigate between months using the arrows. Your Savings Goals also appear here with progress rings.'
    },

    // ── 3. SUBSCRIPTIONS ─────────────────────────────────────────────
    {
      image: '/logos/strack/image2.png',
      title: 'Subscriptions Tracker',
      description:
        'Never miss a recurring payment. The Subs tab tracks every subscription — monthly, yearly, or custom — and shows your total Monthly and Yearly spend at a glance. "Due This Month" highlights what\'s coming up. Tap Pay to log the payment instantly. The Ghost Subscription detector flags services you\'re paying for but haven\'t used in 30+ days so you can cancel them.'
    },

    // ── 4. TRANSACTIONS ───────────────────────────────────────────────
    {
      image: '/logos/strack/image4.png',
      title: 'Transactions Ledger',
      description:
        'Every expense and income in one searchable list. Filter by All, Expenses, Income, Food, Transport, and more category chips. Tap any transaction to edit it. The blue + Add Transaction button at the bottom opens the quick-add sheet where you choose debit or credit, pick a category, enter an amount, select a wallet, set a date, and optionally mark it as Recurring Monthly.'
    },

    // ── 5. QUICK LINKS ────────────────────────────────────────────────
    {
      image: '/logos/strack/image5.png',
      title: 'Quick Links & Templates',
      description:
        'One hub for everything. The Quick tab shows your saved Quick Templates at the top — tap Use to add a transaction in one tap, or tap the ✏️ Edit button to update it. Below is the Features grid giving you instant access to Analytics, Goals, Debts, Wishlist, Warranty, Splitter, Streaks, SMS Scan, OCR Scan, Monthly Wrapped, and Settings.'
    },

    // ── 6. ANALYTICS ─────────────────────────────────────────────────
    {
      image: '/logos/strack/image6.png',
      title: 'Analytics — Monthly Overview',
      description:
        'Deep dive into your money. The top section shows Received, Spent, and Saved totals for the selected month alongside Savings Rate and Average Daily Spend. A 6-month bar trend lets you spot income and expense patterns over time. The Daily Spending canvas shows which specific days you spent the most this month.'
    },

    // ── 7. ANALYTICS (BOTTOM) ─────────────────────────────────────────
    {
      image: '/logos/strack/image7.png',
      title: 'Analytics — Insights & Net Worth',
      description:
        'Scroll down in Analytics for deeper intel: a Spending by Category donut, Top 5 Expenses, Income Sources breakdown, Spending by Day of Week heatmap, Smart Insights (AI-like observations about your habits), a Net Worth tracker showing total balance across all wallets, and a Top Spending Days This Month list.'
    },

    // ── 8. GOALS ─────────────────────────────────────────────────────
    {
      image: '/logos/strack/image8.png',
      title: 'Savings Goals',
      description:
        'Set a savings target with an emoji, a name, and a target amount. A circular progress ring fills as you add money towards the goal. Tap "+ Add Money" to contribute from any wallet. Goals also appear in the Budget tab\'s Savings Goals section so you always have them in view while managing your monthly spend.'
    },

    // ── 9. DEBT TRACKER ───────────────────────────────────────────────
    {
      image: '/logos/strack/image9.png',
      title: 'Debt Tracker',
      description:
        'Keep track of money you\'ve lent and borrowed. The top cards show "They Owe You" (green) and "You Owe" (red) totals instantly. Tap + Add to record a debt with a person\'s name, amount, date, and reason. Mark debts as Settled when repaid — they move out of the active list automatically.'
    },

    // ── 10. WISHLIST VAULT ────────────────────────────────────────────
    {
      image: '/logos/strack/image10.png',
      title: 'Wishlist Vault',
      description:
        'Fight impulse buying with a cooling-off timer. Add something you\'re tempted to buy — the vault locks it for your chosen number of days. Once the timer expires, the app asks "Do you still want this?" Studies show 70% of impulse purchases are regretted. Three counters track items Cooling Off, Unlocked (ready to decide), and total money Saved by saying no.'
    },

    // ── 11. WARRANTY VAULT ────────────────────────────────────────────
    {
      image: '/logos/strack/image11.png',
      title: 'Warranty Vault',
      description:
        'Never let a warranty expire unnoticed. Add any product with its purchase date and warranty expiry. The app automatically alerts you at 30 days, 7 days, 1 day, and on the expiry day itself — even when the app is closed. Cards show an "EXPIRED" badge in red or a countdown like "7d left" so you can act before it\'s too late.'
    },

    // ── 12. BILL SPLITTER ─────────────────────────────────────────────
    {
      image: '/logos/strack/image12.png',
      title: 'Bill Splitter',
      description:
        'Split any bill fairly in seconds. Enter the total amount, choose Equal Split or Custom amounts, add a tip (5%, 10%, 18% GST, 28% GST, or any custom percentage), and add as many people as you need. The app calculates each person\'s exact share instantly. Share the breakdown via WhatsApp with one tap.'
    },

    // ── 13. STREAKS & BADGES ─────────────────────────────────────────
    {
      image: '/logos/strack/image13.png',
      title: 'Streaks & Badges',
      description:
        'Build healthy money habits with daily streaks and achievement badges. Your Day Streak grows every day you log at least one transaction. Badges unlock as you hit milestones — First Step (first transaction), Getting Started (10 txns), Habit Builder (50 txns), Budget Setter (first budget limit), and 11 more. A logging streak bar shows progress toward the 7-day streak goal.'
    },

    // ── 14. SMS SCANNER ───────────────────────────────────────────────
    {
      image: '/logos/strack/image14.png',
      title: 'SMS Scanner',
      description:
        'Automatically detect transactions from bank SMS messages. Toggle Auto SMS Tracker ON and the app reads incoming bank SMS in real time — no manual entry needed. It understands debit, credit, UPI received, and more formats across all major Indian banks (HDFC, SBI, ICICI, Kotak, Axis, etc.). You can also paste any SMS manually and tap Detect Transactions. Every detected entry goes to a review inbox where you confirm, edit, or dismiss before it\'s saved.'
    },

    // ── 15. RECEIPT SCANNER (OCR) ─────────────────────────────────────
    {
      image: '/logos/strack/image15.png',
      title: 'Receipt Scanner (OCR)',
      description:
        'Scan a physical receipt to auto-fill a transaction. Tap the upload zone or drag and drop any photo of a bill — the app uses on-device OCR to extract the total amount, merchant name, and date automatically. Review the extracted details, adjust the category and wallet, then tap Add Transaction. Works with printed receipts from restaurants, supermarkets, petrol stations, and more.'
    },

    // ── 16. MONTHLY WRAPPED ───────────────────────────────────────────
    {
      image: '/logos/strack/image16.png',
      title: 'Monthly Wrapped',
      description:
        'Your personal money story, beautifully summarised every month. Navigate to any past month using the arrows. The Wrapped card shows Total Received, Total Spent, Saved, Savings Rate, Average Daily Spend, transaction count, a top-categories bar chart, Most Spent Day, Top Wallet, and your Biggest Expense. It even assigns you a Spending Personality (e.g. Budget Hero, Splurge King). Tap Save Recap Card to download it as an image for sharing.'
    },

    // ── 17. MORE — WALLETS & CURRENCY ─────────────────────────────────
    {
      image: '/logos/strack/image17.png',
      title: 'Wallets & Currency Settings',
      description:
        'Manage all your money accounts in one place. Add wallets for Bank Account, Credit Card, Cash, or UPI Wallet. Transfer money between wallets with the ⇄ Transfer button. Set your Home Currency (the currency you enter amounts in) and your Display Currency independently — supports INR, USD, EUR, GBP, AED, SGD, JPY, and AUD with live exchange rates or manual rate entry.'
    },

    // ── 18. MORE — SECURITY & NOTIFICATIONS ───────────────────────────
    {
      image: '/logos/strack/image18.png',
      title: 'Security & Notifications & Data',
      description:
        'Keep your finances private. Change your 4-digit PIN at any time, or set up fingerprint unlock. The Lock App button instantly locks Secret Track. Under Notifications, toggle Push Notifications ON to receive alerts for subscription due dates, warranty expiry, wishlist cooling-off, budget exceeded, and daily safe-to-spend. Every alert includes a Snooze button and a View button that opens the relevant screen directly. Export a full backup as JSON or export transactions as CSV for spreadsheets. Restore from any backup file with one tap.'
    },

    // ── 19. MORE — PREFERENCES & DATA ────────────────────────────────
    {
      image: '/logos/strack/image19.png',
      title: 'Preferences',
      description:
        'Customise Secret Track to match how you work. Switch between Dark, Light, and Aesthetic themes instantly. Privacy Mode hides all balance amounts behind dots until you tap the eye icon — and it stays hidden even when you close and reopen the app. Auto-Lock locks the app after your chosen inactivity period (1–30 min). Recurring Reminders badges the Txns tab and sends a notification whenever a recurring transaction is due. Compact View shrinks transaction rows for a denser list.'
    }
  ]
},
/*  {
    id: 'st-flow',
    name: 'ST Flow',
    logo: '/logos/st-flow.png',
    tagline: 'Automate without limits.',
    description: 'ST Flow is a powerful no-code automation builder that connects your favourite apps and services with visual workflow design.',
    heroColor: '#8B1A1A',
    screenshots: [
      {
        image: '/screenshots/flow-1.png',
        title: 'Visual Workflow Builder',
        description: 'Drag, drop, and connect nodes to build powerful automations without writing a single line of code. Intuitive and infinitely flexible.'
      },
      {
        image: '/screenshots/flow-2.png',
        title: 'App Integrations',
        description: 'Connect to 200+ apps including Gmail, Slack, Notion, and more. ST Flow speaks the language of every service you already use.'
      },
      {
        image: '/screenshots/flow-3.png',
        title: 'Analytics & Logs',
        description: 'Monitor every workflow run in real time. Detailed logs, error tracking, and performance insights keep your automations healthy.'
      },
    ]
  },
  {
    id: 'st-scan',
    name: 'ST Scan',
    logo: '/logos/st-scan.png',
    tagline: 'See more, know more.',
    description: 'ST Scan is an intelligent document scanner with AI-powered OCR, smart categorisation, and instant cloud sync.',
    heroColor: '#C8961E',
    screenshots: [
      {
        image: '/screenshots/scan-1.png',
        title: 'Smart Capture',
        description: 'Point, tap, done. ST Scan automatically detects document edges, corrects perspective, and enhances clarity in milliseconds.'
      },
      {
        image: '/screenshots/scan-2.png',
        title: 'AI Text Extraction',
        description: 'Our OCR engine extracts text from any document in 50+ languages with 99% accuracy. Search your scans like a database.'
      },
      {
        image: '/screenshots/scan-3.png',
        title: 'Smart Folders',
        description: 'AI automatically categorises your scans into receipts, IDs, contracts, and more. Find any document in seconds, not minutes.'
      },
    ]
  },*/
];

export default products;
