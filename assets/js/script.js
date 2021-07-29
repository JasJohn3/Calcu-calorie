const allow = (positon) => (
    console.log(position)
);

navigator.geolocation.getCurrentPosition(allow, deny);