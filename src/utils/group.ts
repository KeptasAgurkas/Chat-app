export function groupByNextItem<T>(items: T[], fn: (data: T) => string) {
    let prev: T = items[0]
    let tmpGroup: T[] = []
    let group: T[][] = []

    for (let i = 0; i <= items.length - 1; i++) {
        if (i === 0) {
            tmpGroup.push(items[i])
            continue
        }

        if (fn(prev) === fn(items[i])) {
            tmpGroup.push(items[i])
            prev = items[i]
            continue
        }

        group.push(tmpGroup)
        tmpGroup = [items[i]]
        prev = items[i]
    }

    return [...group, tmpGroup]
}

export function groupByType<T>(items: T[], fn: (data: T) => string) {
    let group: Record<string, T[]> = {}

    for (const item of items) {
        const key = fn(item)
        /// DATE TO STRING
        if (group[key] == null) {
            group[key] = []
        }
        group[key].push(item)
    }

    return group
}

export function groupByDay<T>(
    items: T[],
    fn: (data: T) => Date | number | string
) {
    return groupByType(items, (c) => {
        const date = new Date(fn(c))
        return `${date.getFullYear()}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${date.getDate().toString()}`
    })
}
