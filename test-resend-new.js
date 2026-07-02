const { Resend } = require('resend');

const resend = new Resend('re_JkQipigh_7gwmda7DDJMtSjU2SP5wbwNR');

async function test() {
  console.log("Testing new API key with custom domain...");
  const { data, error } = await resend.emails.send({
    from: 'hello@brixs.space', // If domain is verified, this will work.
    to: 'contactbrixs@gmail.com', // Their account email
    subject: 'Test Internal Email',
    html: '<p>Testing</p>'
  });

  if (error) {
    console.error("Resend Error:", error);
  } else {
    console.log("Success:", data);
  }
}

test();
