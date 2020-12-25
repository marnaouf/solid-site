import type { Component } from 'solid-js';

const Header: Component = ({ title }: { title: string }) => (
  <div class="bg-gradient-to-r from-solid-light via-solid-medium bg-hero-pattern to-solid text-white">
    <div class="container">
      <h1 class="py-8 text-3xl">{title}</h1>
    </div>
  </div>
);

export default Header;