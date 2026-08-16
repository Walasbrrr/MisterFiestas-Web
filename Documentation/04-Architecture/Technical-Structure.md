# Estructura técnica

## Decisión actual

Comenzar con una sola aplicación Next.js. Un monorepo no aporta valor mientras no
existan realmente un panel administrativo, una API u otro consumidor compartido.

```text
mister-fiestas/
├── backend/            # API Spring Boot cuando comience su implementación
├── Documentation/
├── public/
│   └── images/
├── src/
│   ├── app/
│   ├── components/
│   ├── content/
│   ├── lib/
│   └── types/
├── package.json
└── README.md
```

## Evolución prevista

El frontend permanece en la raíz durante el MVP y `backend/` queda reservado para
Spring Boot. Cuando exista un panel real, se evaluará mover el frontend a `apps/web`
y crear `apps/admin`; no hace falta anticipar esa migración.
