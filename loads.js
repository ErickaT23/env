document.addEventListener('DOMContentLoaded', function() {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split("&");
        for (const pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return params;
    }

    const queryParams = getQueryParams();
    const guestName = queryParams.nombre || "Invitado";
    const adultPasses = parseInt(queryParams.adultos) || 0;
    const childPasses = parseInt(queryParams.ninos) || 0;

    document.getElementById('guest-name').textContent = guestName;

    if (adultPasses > 0) {
        document.getElementById('adult-info').textContent = `${adultPasses} adulto(s)`;
    } else {
        document.getElementById('adult-info').style.display = 'none';
    }

    if (childPasses > 0) {
        document.getElementById('child-info').textContent = `${childPasses} niño(s)`;
    } else {
        document.getElementById('child-info').style.display = 'none';
    }
});
