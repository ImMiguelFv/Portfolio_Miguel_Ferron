import { Resend } from 'resend';

const resend = new Resend('re_QNT4E9Ss_8qYtAHwPYLRMdyXJt5qNuk4s');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['mferronvinuela@gmail.com'],
    subject: 'Hello World',
    text: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
