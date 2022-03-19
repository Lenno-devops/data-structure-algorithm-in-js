class Multiset<E>
{
    private List<E> values; 
    private List<Integer> frequency;
 
    private final String ERROR_MSG = "Count cannot be negative: ";
 
    /* Constructor */
    public Multiset()
    {
        values = new ArrayList<>();
        frequency = new ArrayList<>();
    }

    public boolean add(E element) {
        return add(element, 1) >= 0;
    }
    
    public int add(E element, int count)
    {
        if (count < 0) {
            throw new IllegalArgumentException(ERROR_MSG + count);
        }
 
        int index = values.indexOf(element);
        int prevCount = 0;
 
        if (index != -1)
        {
            prevCount = frequency.get(index);
            frequency.set(index, prevCount + count);
        }
        else if (count != 0)
        {
            values.add(element);
            frequency.add(count);
        }
 
        return prevCount;
    }
 
    public void forEach(Consumer<? super E> action)
    {
        List<E> all = new ArrayList<>();
 
        for (int i = 0; i < values.size(); i++)
        {
            for (int j = 0; j < frequency.get(i); j++) {
                all.add(values.get(i));
            }
            all.forEach(action);
        }
    }
 
    public boolean remove(Object element) {
        return remove(element, 1) > 0;
    }
 
    public int remove(Object element, int count)
    {
        if (count < 0) {
            throw new IllegalArgumentException(ERROR_MSG + count);
        }
 
        int index = values.indexOf(element);
        if (index == -1) {
            return 0;
        }
 
        int prevCount = frequency.get(index);
 
        if (prevCount > count) {
            frequency.set(index, prevCount - count);
        }
        else {
            values.remove(index);
            frequency.remove(index);
        }
 
        return prevCount;
    }
 
    public boolean contains(Object element) {
        return values.contains(element);
    }
 
    public int setCount(E element, int count)
    {
        if (count < 0) {
            throw new IllegalArgumentException(ERROR_MSG + count);
        }
 
        if (count == 0) {
            remove(element);
        }
 
        int index = values.indexOf(element);
        if (index == -1) {
            return add(element, count);
        }
 
        int prevCount = frequency.get(index);
        frequency.set(index, count);
 
        return prevCount;
    }
 
    public int count(Object element)
    {
        int index = values.indexOf(element);
 
        return (index == -1) ? 0 : frequency.get(index);
    }
 
    public boolean isEmpty() {
        return values.size() == 0;
    }
 
    public int size()
    {
        int size = 0;
        for (Integer i: frequency) {
            size += i;
        }
        return size;
    }
 
    @Override
    public String toString()
    {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < values.size(); i++)
        {
            sb.append(values.get(i));
 
            if (frequency.get(i) > 1) {
                sb.append(" x ").append(frequency.get(i));
            }
 
            if (i != values.size() - 1) {
                sb.append(", ");
            }
        }
 
        return sb.append("]").toString();
    }
}
 
class Main
{
    // Multiset implementation in Java
    public static void main(String[] args)
    {
        Multiset<String> multiset = new Multiset();
 
        multiset.add("USA");
        multiset.add("Japan", 2);
        multiset.addAll("India", "China");
        multiset.addAll(Arrays.asList("USA", "India", "China", "Japan"));
 
        System.out.println(multiset);
 
        multiset.remove("China");
        multiset.remove("Japan", 2);
 
        System.out.println(multiset);
 
        multiset.setCount("USA", 4);
        multiset.setCount("Japan", 5);
        multiset.setCount("Mexico", 3);
        multiset.setCount("China", 0);
 
        System.out.println(multiset);
    }
}