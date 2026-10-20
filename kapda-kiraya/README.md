# Kapda Kiraya

Peer-to-peer clothing rental website (customers, retailers and individuals).

## Run in VS Code
1. File > Open Folder... and pick the `kapda-kiraya` folder.
2. Install the **Live Server** extension (Ritwick Dey).
3. Right-click `index.html` > **Open with Live Server**.

## Files
- `index.html` - page structure (Browse, Upload, My Rentals views)
- `css/style.css` - all styling and light/dark theme colors
- `js/app.js` - listings, filters, booking and upload logic

## Notes
- Data is saved in the browser (localStorage), so it is not shared between users.
- To share data between users, connect `js/app.js` to a backend or database (e.g. Firebase, Supabase).
