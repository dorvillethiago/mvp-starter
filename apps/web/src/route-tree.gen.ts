/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthRouteImport } from './routes/auth/route'
import { Route as AppRouteImport } from './routes/app/route'
import { Route as IndexImport } from './routes/index'
import { Route as AuthSignUpIndexImport } from './routes/auth/sign-up/index'
import { Route as AuthSignInIndexImport } from './routes/auth/sign-in/index'
import { Route as AppTestIndexImport } from './routes/app/test/index'
import { Route as AppHomeIndexImport } from './routes/app/home/index'

// Create/Update Routes

const AuthRouteRoute = AuthRouteImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const AppRouteRoute = AppRouteImport.update({
  id: '/app',
  path: '/app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignUpIndexRoute = AuthSignUpIndexImport.update({
  id: '/sign-up/',
  path: '/sign-up/',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthSignInIndexRoute = AuthSignInIndexImport.update({
  id: '/sign-in/',
  path: '/sign-in/',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AppTestIndexRoute = AppTestIndexImport.update({
  id: '/test/',
  path: '/test/',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppHomeIndexRoute = AppHomeIndexImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => AppRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/app': {
      id: '/app'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof AppRouteImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/app/home/': {
      id: '/app/home/'
      path: '/home'
      fullPath: '/app/home'
      preLoaderRoute: typeof AppHomeIndexImport
      parentRoute: typeof AppRouteImport
    }
    '/app/test/': {
      id: '/app/test/'
      path: '/test'
      fullPath: '/app/test'
      preLoaderRoute: typeof AppTestIndexImport
      parentRoute: typeof AppRouteImport
    }
    '/auth/sign-in/': {
      id: '/auth/sign-in/'
      path: '/sign-in'
      fullPath: '/auth/sign-in'
      preLoaderRoute: typeof AuthSignInIndexImport
      parentRoute: typeof AuthRouteImport
    }
    '/auth/sign-up/': {
      id: '/auth/sign-up/'
      path: '/sign-up'
      fullPath: '/auth/sign-up'
      preLoaderRoute: typeof AuthSignUpIndexImport
      parentRoute: typeof AuthRouteImport
    }
  }
}

// Create and export the route tree

interface AppRouteRouteChildren {
  AppHomeIndexRoute: typeof AppHomeIndexRoute
  AppTestIndexRoute: typeof AppTestIndexRoute
}

const AppRouteRouteChildren: AppRouteRouteChildren = {
  AppHomeIndexRoute: AppHomeIndexRoute,
  AppTestIndexRoute: AppTestIndexRoute,
}

const AppRouteRouteWithChildren = AppRouteRoute._addFileChildren(
  AppRouteRouteChildren,
)

interface AuthRouteRouteChildren {
  AuthSignInIndexRoute: typeof AuthSignInIndexRoute
  AuthSignUpIndexRoute: typeof AuthSignUpIndexRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthSignInIndexRoute: AuthSignInIndexRoute,
  AuthSignUpIndexRoute: AuthSignUpIndexRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/app': typeof AppRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '/app/home': typeof AppHomeIndexRoute
  '/app/test': typeof AppTestIndexRoute
  '/auth/sign-in': typeof AuthSignInIndexRoute
  '/auth/sign-up': typeof AuthSignUpIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/app': typeof AppRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '/app/home': typeof AppHomeIndexRoute
  '/app/test': typeof AppTestIndexRoute
  '/auth/sign-in': typeof AuthSignInIndexRoute
  '/auth/sign-up': typeof AuthSignUpIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/app': typeof AppRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '/app/home/': typeof AppHomeIndexRoute
  '/app/test/': typeof AppTestIndexRoute
  '/auth/sign-in/': typeof AuthSignInIndexRoute
  '/auth/sign-up/': typeof AuthSignUpIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/app'
    | '/auth'
    | '/app/home'
    | '/app/test'
    | '/auth/sign-in'
    | '/auth/sign-up'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/app'
    | '/auth'
    | '/app/home'
    | '/app/test'
    | '/auth/sign-in'
    | '/auth/sign-up'
  id:
    | '__root__'
    | '/'
    | '/app'
    | '/auth'
    | '/app/home/'
    | '/app/test/'
    | '/auth/sign-in/'
    | '/auth/sign-up/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppRouteRoute: typeof AppRouteRouteWithChildren
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppRouteRoute: AppRouteRouteWithChildren,
  AuthRouteRoute: AuthRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/app",
        "/auth"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/app": {
      "filePath": "app/route.tsx",
      "children": [
        "/app/home/",
        "/app/test/"
      ]
    },
    "/auth": {
      "filePath": "auth/route.tsx",
      "children": [
        "/auth/sign-in/",
        "/auth/sign-up/"
      ]
    },
    "/app/home/": {
      "filePath": "app/home/index.tsx",
      "parent": "/app"
    },
    "/app/test/": {
      "filePath": "app/test/index.tsx",
      "parent": "/app"
    },
    "/auth/sign-in/": {
      "filePath": "auth/sign-in/index.tsx",
      "parent": "/auth"
    },
    "/auth/sign-up/": {
      "filePath": "auth/sign-up/index.tsx",
      "parent": "/auth"
    }
  }
}
ROUTE_MANIFEST_END */
