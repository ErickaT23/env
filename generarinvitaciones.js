import invitados from './invitados.js';

invitados.forEach(invitado => {
    const url = new URL('https://tusitioweb.com/invitacion.html');
    url.searchParams.append('nombre', invitado.nombre);
    url.searchParams.append('adultos', invitado.adultos);
    url.searchParams.append('ninos', invitado.ninos);

    console.log(`Invitación para ${invitado.nombre}: ${url.toString()}`);
});
