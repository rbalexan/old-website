---
layout: simple
title: Contact
---

<style>
.hero-body .column {
	margin-bottom: 180px;
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

<span class="icon"> <i class="fas fa-envelope"></i> </span> Email: <a href="mailto:rbalexan@stanford.edu">rbalexan@stanford.edu</a>

<span class="icon"> <i class="fab fa-github"></i> </span> Github: <a href="https://github.com/rbalexan" target="_blank">@rbalexan</a>

<span class="icon"> <i class="fab fa-linkedin"></i> </span> LinkedIn: <a href="https://www.linkedin.com/in/rbalexan/" target="_blank">@rbalexan</a>

---


