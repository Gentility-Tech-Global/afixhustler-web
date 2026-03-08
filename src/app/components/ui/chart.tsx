"use client";

import * as React from "react";
import * as Recharts from "recharts";

import { cn } from "./utils";

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    color?: string;
    icon?: React.ComponentType;
  }
>;

type ChartContextType = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextType | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used inside <ChartContainer />");
  }

  return context;
}

function ChartContainer({
  config,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
}) {
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cn(
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <Recharts.ResponsiveContainer>
          {children}
        </Recharts.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

export const ChartTooltip = Recharts.Tooltip;

type TooltipPayloadItem = {
  name?: string;
  value?: number;
  color?: string;
  dataKey?: string;
};

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
}: {
  active?: boolean;
  label?: string | number;
  payload?: TooltipPayloadItem[];
} & React.ComponentProps<"div">) {
  const { config } = useChart();

  if (!active || !payload?.length) return null;

  return (
    <div
      className={cn(
        "rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {label && (
        <div className="mb-1 font-medium text-foreground">
          {label}
        </div>
      )}

      <div className="grid gap-1">
        {payload.map((item, index) => {
          const key = item.dataKey ?? item.name ?? "";
          const itemConfig = config[key];

          return (
            <div
              key={index}
              className="flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-1.5">
                <div
                  className="h-2 w-2 rounded-[2px]"
                  style={{
                    backgroundColor:
                      item.color ??
                      itemConfig?.color ??
                      "#8884d8",
                  }}
                />

                <span className="text-muted-foreground">
                  {itemConfig?.label ?? item.name}
                </span>
              </div>

              {item.value !== undefined && (
                <span className="font-mono tabular-nums">
                  {item.value.toLocaleString()}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const ChartLegend = Recharts.Legend;

type LegendItem = {
  value?: string;
  dataKey?: string;
  color?: string;
};

function ChartLegendContent({
  payload,
  className,
}: {
  payload?: LegendItem[];
} & React.ComponentProps<"div">) {
  const { config } = useChart();

  const items = payload ?? [];

  if (!items.length) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 pt-3",
        className
      )}
    >
      {items.map((item, index) => {
        const key = item.dataKey ?? item.value ?? "";
        const itemConfig = config[key];

        return (
          <div
            key={index}
            className="flex items-center gap-1.5"
          >
            <div
              className="h-2 w-2 rounded-[2px]"
              style={{
                backgroundColor:
                  item.color ??
                  itemConfig?.color ??
                  "#8884d8",
              }}
            />

            <span>{itemConfig?.label ?? item.value}</span>
          </div>
        );
      })}
    </div>
  );
}


export {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
};