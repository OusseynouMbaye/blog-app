import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';

// Mock components
const mockHeader = {
  name: 'Header',
  template: '<div>Header</div>',
};

const mockRouterView = {
  name: 'RouterView',
  template: '<div>Router View</div>',
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: { template: '<div>Home Page</div>' },
    },
  ],
});

describe('App', () => {
  it('renders properly', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        stubs: {
          Header: mockHeader,
          RouterView: mockRouterView,
        },
      },
    });

    await router.isReady();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toContain('Header');
    expect(wrapper.html()).toContain('Router View');
  });
});
