import DefaultTheme from 'vitepress/theme';
import './custom.css';
// @ts-ignore
import comment from "../components/gitalk.vue";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component("gitalk", comment)
    ctx.app.use(SpeedInsights)
  },
};
