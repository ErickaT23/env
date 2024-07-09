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

    // Determine the type of invitation based on the number of passes
    if (adultPasses > 1 || (adultPasses === 1 && childPasses > 0) || childPasses > 1) {
        document.getElementById('guest-type').textContent = ' invitados';
    } else if (adultPasses === 1 && childPasses === 0) {
        document.getElementById('guest-type').textContent = ' invitado';
    } else if (adultPasses === 0 && childPasses === 1) {
        document.getElementById('guest-type').textContent = ' invitada';
    } else if (adultPasses === 1 && childPasses === 1) {
        document.getElementById('guest-type').textContent = ' invitado e invitada';
    }

    if (adultPasses > 0) {
        document.getElementById('adult-info').textContent = ` ${adultPasses} adulto(s)`;
    }
    
    if (childPasses > 0) {
        document.getElementById('child-info').textContent = ` ${childPasses} niño(s)`;
    }
});
