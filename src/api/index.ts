import { NgSetupOptions, ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as compression from 'compression';
export interface ServerAPIOptions {
  distPath: string;
  ngSetup?: NgSetupOptions;
}

export function createApi(options: ServerAPIOptions) {
  const router = express();

  router.use(createNgRenderMiddleware(options.distPath, options.ngSetup));
  router.use(compression());
  return router;
}

export function createNgRenderMiddleware(
  distPath: string,
  ngSetup: NgSetupOptions
) {
  const router = express();
  router.set('view engine', 'html');
  router.set('views', distPath);

  // Server static files from distPath
  router.get('*.*', express.static(distPath));

  // Angular Express Engine
  router.engine('html', ngExpressEngine(ngSetup));

  // All regular routes use the Universal engine
  router.get('*', (req, res) => res.render('index', { req, res }));

  return router;
}
