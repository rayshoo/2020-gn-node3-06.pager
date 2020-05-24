const alert = (msg, location = null )=>{ // ES6 Default Value 지정 가능
  return `
  <script>
  alert('${msg}');
  ${location ? "location.href = '" + location + "';" : ""}
  </script>`;
}

module.exports = { alert }