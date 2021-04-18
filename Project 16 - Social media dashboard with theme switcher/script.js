function changeTheme(checkbox) {
    if (checkbox.checked == true) {
        document.documentElement.style.setProperty('--bg', '#FFFFFF');
        document.documentElement.style.setProperty('--headerbg', '#f5f7ff');
        document.documentElement.style.setProperty('--cardbg', '#f0f2fa');
        document.documentElement.style.setProperty('--lighttext', '#63687e');
        document.documentElement.style.setProperty('--text', '#1e202a');
    } else {
        document.documentElement.style.setProperty('--bg', '#1e202a');
        document.documentElement.style.setProperty('--headerbg', '#1f212e');
        document.documentElement.style.setProperty('--cardbg', '#252a41');
        document.documentElement.style.setProperty('--lighttext', '#8b97c6');
        document.documentElement.style.setProperty('--text', '#FFFFFF');
    }
}