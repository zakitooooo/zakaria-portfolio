from __future__ import annotations

import argparse
from pathlib import Path

from src.pipeline.config import AppSettings, ExtractOptions
from src.pipeline.extract import extract as extract_step
from src.pipeline.transform import transform as transform_step
from src.pipeline.load import load as load_step


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Orchestrateur ETL simple")
    sub = parser.add_subparsers(dest="command", required=True)

    def add_common(p: argparse._SubParsersAction):
        def add(cmd: str):
            sp = p.add_parser(cmd)
            sp.add_argument("--source", default="jsonplaceholder")
            sp.add_argument("--limit", type=int, default=100)
            return sp
        return add

    add = add_common(sub)
    add("etl")
    add("extract")
    add("transform")
    add("load")

    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()

    settings = AppSettings()
    settings.ensure_dirs()
    options = ExtractOptions(source=args.source, limit=args.limit)

    if args.command == "extract":
        path = extract_step(settings, options)
        print(f"Extract sauvegardé: {path}")
        return

    if args.command == "transform":
        path = transform_step(settings, options)
        print(f"Parquet sauvegardé: {path}")
        return

    if args.command == "load":
        path = load_step(settings, options)
        print(f"Chargement terminé depuis: {path}")
        return

    if args.command == "etl":
        raw = extract_step(settings, options)
        processed = transform_step(settings, options)
        load_step(settings, options)
        print(f"ETL terminé. Brut: {raw} | Traité: {processed}")
        return


if __name__ == "__main__":
    main()