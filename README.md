# JsonBenchmark

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/node?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Quick Start

```sh
make install
make bench
```

## Development

To generate a new application, use:

```sh
npx nx g @nx/node:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/node:lib mylib
```

### Note
- js 파일로 된 프로젝트를 가져올 수 있는 방법이 없어서, `libs/data-*` 폴더는 `package.json` 에서 상대 경로로 참조하고 있습니다.
- 이때, `nx graph` 로 dependency 를 확인하면 제대로 표시되지 않습니다.
- 따라서, 실행할때 `Makefile`을 통해서 실행하는것이 좋습니다
