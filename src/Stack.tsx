export type StackProps = {
  /**
   * Space between children, from the spacing scale.
   * @example "4"
   * @example { initial: "2", md: "4" }
   */
  gap?: string | Record<string, string>;
  /**
   * Main axis.
   * @example "column"
   * @default "row"
   */
  direction?: "row" | "column";
  children?: React.ReactNode;
};

/** Flexbox container with a token-based gap. */
export function Stack({ gap = "0", direction = "row", children }: StackProps) {
  return <div style={{ display: "flex", flexDirection: direction, gap: `${gap}px` }}>{children}</div>;
}
