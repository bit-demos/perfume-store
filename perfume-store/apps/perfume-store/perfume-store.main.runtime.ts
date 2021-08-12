import { MainRuntime } from '@teambit/cli';
import { ReactAspect, ReactMain } from '@teambit/react';
import { PerfumeStoreAspect } from './perfume-store.aspect';

export class PerfumeStoreMain {
  static slots = [];
  static dependencies = [ReactAspect];
  static runtime = MainRuntime;
  static async provider([react]: [ReactMain]) {
    react.registerReactApp({
      name: 'perfume-store',
      entry: [require.resolve('./perfume-store.app-root')]
    });
    return new PerfumeStoreMain();
  }
}

PerfumeStoreAspect.addRuntime(PerfumeStoreMain);
