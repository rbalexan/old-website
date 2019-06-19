---
layout: simple
title: Contact
---

<style>
.hero-body .column {
	margin-bottom: 180px;
}

#email {
	text-align: center;
	font-size: 25px;
}
</style>

<script type="module">
// Forwards `subject` and `body` search params to the email link

const originalSearchParams = new URLSearchParams(location.search);
const element = document.querySelector('#email a');

const searchParams = new URLSearchParams();
if (originalSearchParams.has('subject')) {
	searchParams.set('subject', originalSearchParams.get('subject'));
}
if (originalSearchParams.has('body')) {
	searchParams.set('body', originalSearchParams.get('body'));
}

element.search = searchParams.toString();
</script>

# Contact

---

### General Email
<p id="email">
	<a href="mailto:ross.alexander7@gmail.com">ross.alexander7@gmail.com</a>
</p>

### Stanford University Email
<p id="email">
	<a href="mailto:rbalexander@stanford.edu">rbalexander@stanford.edu</a>
</p>

---
