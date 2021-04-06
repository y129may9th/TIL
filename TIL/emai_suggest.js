const domains = [
  'au.com',
  'docomo.ne.jp',
  'ezweb.ne.jp',
  'gmail.com',
  'hotmail.co.jp',
  'hotmail.com',
  'i.softbank.jp',
  'icloud.com',
  'me.com',
  'mineo.jp',
  'nifty.com',
  'outlook.com',
  'outlook.jp',
  'softbank.ne.jp',
  'yahoo.co.jp',
  'yahoo.ne.jp',
  'ymobile.ne.jp'
];

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const EmailDomainSuggester = function(emailForm) {
      let datalist = document.getElementById('complemented-emails');
      const init = () => {
        bindEvents();
      };

      const bindEvents = () => {
        emailForm.addEventListener('keyup', emailValue);
      };

      const emailValue = function() {
        let value = this.value;
        if (value.indexOf('@') != -1) {
          addDatalist(value);
        } else {
          datalist.innerHTML = '';
        }
      };

      const addDatalist = value => {
        let newOptionsString = '';
        let emailDomain = value.split('@')[1];

        for (let i = 0; i < domains.length; i++) {
          // ドメインが完成している場合はサジェストしない
          if (emailDomain == domains[i]) {
            newOptionsString = '';
          } else {
            value = value.split('@')[0];
            newOptionsString += "<option value='" + value + '@' + domains[i] + "'>";
          }
        }

        datalist.innerHTML = newOptionsString;
      };

      init();
    };
    new EmailDomainSuggester(document.getElementById('demandformEmail'));
  },
  false
);
