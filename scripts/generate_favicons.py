from pathlib import Path
from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parents[1] / "public" / "icons"

def make_icon(size: int) -> Image.Image:
    scale = size / 120
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    def xy(value: float) -> int:
        return round(value * scale)
    draw.ellipse((xy(6), xy(6), xy(114), xy(114)), fill="#071821", outline="#c99a46", width=max(1, xy(4)))
    blade = [(xy(64), xy(18)), (xy(72), xy(18)), (xy(68), xy(33)), (xy(61), xy(45)), (xy(66), xy(57)), (xy(57), xy(72)), (xy(62), xy(83)), (xy(55), xy(104)), (xy(63), xy(104)), (xy(72), xy(74)), (xy(68), xy(62)), (xy(77), xy(47)), (xy(70), xy(35))]
    draw.polygon(blade, fill="#e5b95d")
    draw.polygon([(xy(47), xy(92)), (xy(74), xy(92)), (xy(70), xy(103)), (xy(51), xy(103))], fill="#e5b95d")
    draw.line((xy(39), xy(105), xy(82), xy(105)), fill="#e5b95d", width=max(1, xy(4)))
    return image

for target in (16, 32, 180):
    make_icon(target).save(OUT / {16: "favicon-16.png", 32: "favicon-32.png", 180: "apple-touch-icon.png"}[target])
