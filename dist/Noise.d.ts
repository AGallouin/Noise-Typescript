declare module NoiseJs {
    class Noise {
        grad3: Array<Grad>;
        p: Array<number>;
        private _perm;
        private _gradP;
        constructor(seed: number);
        seed(seed: number): void;
        simplex2(xin: number, yin: number): number;
        simplex3(xin: number, yin: number, zin: number): number;
        private static fade(t);
        private static lerp(a, b, t);
        perlin2(x: number, y: number): number;
        perlin3(x: number, y: number, z: number): number;
    }
    class Grad {
        x: number;
        y: number;
        z: number;
        constructor(x: number, y: number, z: number);
        dot2(x: number, y: number): number;
        dot3(x: number, y: number, z: number): number;
    }
}
