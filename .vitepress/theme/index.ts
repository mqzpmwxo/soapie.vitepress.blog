import DefaultTheme from 'vitepress/theme';
import './custom.css';
// @ts-ignore
import comment from "../components/gitalk.vue";
import { injectSpeedInsights } from '@vercel/speed-insights';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component("gitalk", comment)
    injectSpeedInsights();
  },
};
