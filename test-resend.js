const { Resend } = require('resend');

const resend = new Resend('re_Zrx7zc17_K7uhoBbyuLD7oTFKzv6fgS7D');

async function test() {
  console.log("Testing email to hello@brixs.space with onboarding@resend.dev...");
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'hello@brixs.space',
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
