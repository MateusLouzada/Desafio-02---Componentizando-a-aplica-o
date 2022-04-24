interface GenreProps {
  selectedGenre: {
    title: string;
  };
}

export default function Header(props: GenreProps) {
  const { selectedGenre } = props;
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
