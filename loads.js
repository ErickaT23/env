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
    const guestName = queryParams.nombre || "Guest";
    const adultPasses = queryParams.adultos || 0;
    const childPasses = queryParams.ninos || 0;

    document.getElementById('guest-name').textContent = guestName;
    document.getElementById('adult-passes').textContent = adultPasses;
    document.getElementById('child-passes').textContent = childPasses;
});
