# Quality guard report

## Resumen
- **Root path:** 
- **App dir:** 
- **Pages dir:** 
- **Página raíz detectada:** 
- **APIs detectadas:** 

## Rutas
- **app/page.tsx:** 
- **app/layout.tsx:** 
- **pages/index.tsx:** 
- **pages/index.js:** 
- **pages/api dir:** 
- **app/api dir:** 
- **app/api routes:** 
- **pages/api files:** 

## Configs
- **:** exists=; nonEmpty=
- **:** exists=; nonEmpty=
- **:** exists=; nonEmpty=
- **:** exists=; nonEmpty=
- **:** exists=; nonEmpty=
- **:** exists=; nonEmpty=
- **:** exists=; nonEmpty=

## Env
- **.gitignore excluye .env:** 

## package.json
- **name:** 
- **version:** 
- **script lint:** 
- **script build:** 
- **script postbuild:** 
- **script dev:** 
- **script start:** 
- **deps:** next=; react=; tailwind=; next-sitemap=; eslint=

## Artefactos
- **sourcemaps fuera de .next:** 
- **.pack files:** 

## Recomendaciones accionables
- **Rutas:** No hay página raíz detectada. Crear app/page.tsx (App Router) o pages/index.tsx (Pages Router).
- **API:** No se detectan endpoints. Si tu sitio requiere backend, define pages/api/* o app/api/*/route.ts.
- **.env:** No se detectan variables. Si usas keys, define .env.local y exclúyelo en .gitignore.
- **Artefactos:**  sourcemaps fuera de .next. Considera moverlos o excluirlos.
- **Artefactos:**  .pack detectados. Verifica si son necesarios y exclúyelos del repo si no.
