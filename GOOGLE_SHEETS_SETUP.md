# Google Sheets Integration Setup Guide

This guide will help you connect the Travel Dose booking form to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Travel Dose Bookings"
4. Create the following column headers in the first row:
   - A1: Name
   - B1: Email
   - C1: Phone
   - D1: Travelers
   - E1: Destination
   - F1: Date
   - G1: Message
   - H1: Timestamp

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**
2. Delete any existing code in the script editor
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.travelers,
      data.destination,
      data.date,
      data.message,
      data.timestamp
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click on the **Save** icon (disk icon) or press Ctrl+S
5. Name your project "Travel Dose Form Handler"

## Step 3: Deploy the Web App

1. Click on **Deploy** > **New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Fill in the deployment settings:
   - Description: "Travel Dose Booking Form"
   - Execute as: **Me** (your email)
   - Who has access: **Anyone**
4. Click **Deploy**
5. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** if you see a warning
   - Click **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web app URL** that appears (it will look like: `https://script.google.com/macros/s/AKfycby.../exec`)

## Step 4: Update Your Website

1. Open the `main.js` file in your project
2. Find the line that says:
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual Web app URL (keep the quotes)
4. Save the file

Example:
```javascript
const scriptURL = 'https://script.google.com/macros/s/AKfycbyXXXXXXXXXXXXXXXXXXXXXXXXX/exec';
```

## Step 5: Test Your Form

1. Visit your website
2. Navigate to the booking form
3. Fill out all required fields
4. Submit the form
5. Check your Google Sheet to see if the data appears

## Troubleshooting

### Form doesn't submit
- Check that you copied the correct Web app URL
- Make sure you deployed the script as "Anyone" can access
- Verify the Google Apps Script code is correct

### Data not appearing in sheet
- Check the Apps Script execution logs: In Apps Script editor, click **Executions** on the left sidebar
- Make sure your sheet has the correct column headers
- Verify the sheet is the active sheet in your spreadsheet

### Permission errors
- Re-authorize the script by going to Apps Script > **Deploy** > **Manage deployments** > Edit > **Deploy**
- Make sure "Who has access" is set to **Anyone**

## Email Notifications (Optional Enhancement)

To receive email notifications when someone submits a booking, add this function to your Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.travelers,
      data.destination,
      data.date,
      data.message,
      data.timestamp
    ]);

    // Send email notification
    var emailBody = "New booking request received!\n\n" +
                    "Name: " + data.name + "\n" +
                    "Email: " + data.email + "\n" +
                    "Phone: " + data.phone + "\n" +
                    "Travelers: " + data.travelers + "\n" +
                    "Destination: " + data.destination + "\n" +
                    "Date: " + data.date + "\n" +
                    "Message: " + data.message;

    MailApp.sendEmail({
      to: "info@traveldose.pk",
      subject: "New Travel Dose Booking Request",
      body: emailBody
    });

    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

Replace `"info@traveldose.pk"` with your actual email address.

## Support

If you encounter any issues, please refer to:
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)












add indo 
# Google Sheets Integration Setup

## Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Travel Dose Bookings"
4. Add these column headers in row 1:
   - Timestamp
   - Name
   - Email
   - Phone
   - Travelers
   - Destination
   - Date
   - Duration
   - Message
   - Newsletter
   - Source

## Step 2: Create Google Apps Script
1. In your Google Sheet, go to Extensions > Apps Script
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const row = [
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.travelers,
      data.destination,
      data.date,
      data.duration,
      data.message,
      data.newsletter,
      data.source
    ];
    
    sheet.appendRow(row);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl+S)
4. Click "Deploy" > "New deployment"
5. Choose "Web app" as type
6. Set access to "Anyone"
7. Click "Deploy"
8. Copy the web app URL

## Step 3: Update Your Website
1. Open `main.js`
2. Find the line: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace with your actual Google Apps Script URL

## Step 4: Test
1. Fill out the contact form on your website
2. Check your Google Sheet for new entries
3. You should see the data appear in real-time

## Security Note
The current setup allows anyone to submit data. For production:
1. Add authentication to your Apps Script
2. Implement rate limiting
3. Add data validation
4. Consider using a more secure backend solution