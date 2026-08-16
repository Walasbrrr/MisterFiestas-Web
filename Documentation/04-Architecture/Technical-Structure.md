# Estructura técnica

## Decisión actual

Comenzar con una sola aplicación Next.js. Un monorepo no aporta valor mientras no
existan realmente un panel administrativo, una API u otro consumidor compartido.

```text
mister-fiestas/
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

## Evolución posible

Cuando aparezca una segunda aplicación real, se puede migrar a un workspace con
`apps/web`, `apps/admin` y paquetes compartidos. La API debe añadirse cuando los
requisitos dinámicos justifiquen mantener un servicio independiente.
