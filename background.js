var currentTheme = '';

const themes = [
  {//日
    colors: {
      frame: '#2A0A0A',
      tab_background_text: '#fff',
    }
  },
  {//月
    colors: {
      frame: '#292A0A',
      tab_background_text: '#fff',
    }
  },
  {//火
    colors: {
      frame: '#3B0B39',
      tab_background_text: '#fff',
    }
  },
  {//水
    colors: {
      frame: '#0A2A12',
      tab_background_text: '#fff',
    }
  },
  {//木
    colors: {
      frame: '#3B240B',
      tab_background_text: '#fff',
    }
  },
  {//金
    colors: {
      frame: '#0A0A2A',
      tab_background_text: '#fff',
    }
  },
  {//土
    colors: {
      frame: '#1B0A2A',
      tab_background_text: '#fff',
    }
  }
];

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  setTheme(date.getDay());
}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 5});