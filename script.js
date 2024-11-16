// Basic navigation logic for CyberGuard Hub
function navigateTo(section) {
    switch (section) {
      case 'dashboard':
        alert('Navigating to Dashboard...');
        // In a real-world app, replace the alert with:
        // window.location.href = '/dashboard.html';
        break;
      case 'awareness':
        alert('Navigating to Awareness Training...');
        // window.location.href = '/awareness.html';
        break;
      case 'report':
        alert('Navigating to Report Threat...');
        // window.location.href = '/report.html';
        break;
      default:
        alert('Section not found!');
    }
  }