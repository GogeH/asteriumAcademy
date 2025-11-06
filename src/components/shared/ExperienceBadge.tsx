const getStyles = (exp: string) => {
  switch (exp) {
    case 'Beginner':
      return {
        borderGradient:
          'linear-gradient(195.46deg, #D2FFB5 1.28%, #33C633 92.74%)',
        textGradient:
          'linear-gradient(195.46deg, #D2FFB5 1.28%, #33C633 92.74%)',
      };
    case 'Intermediate':
      return {
        borderGradient: 'linear-gradient(180deg, #BAB9FF 0%, #6074F1 100%)',
        textGradient: 'linear-gradient(180deg, #BAB9FF 0%, #6074F1 100%)',
      };
    case 'Advanced':
      return {
        borderGradient: 'linear-gradient(180deg, #98F6FF -3.33%, #3681D7 100%)',
        textGradient: 'linear-gradient(180deg, #98F6FF -3.33%, #3681D7 100%)',
      };
    default:
      return { borderGradient: '', textGradient: '' };
  }
};

type TExperienceBadge = {
  experience: string;
};

export default function ExperienceBadge({ experience }: TExperienceBadge) {
  const styles = getStyles(experience);

  return (
    <div className="relative inline-block mr-4">
      <div
        className="absolute -inset-[1px] rounded-[25px]"
        style={{ background: styles.borderGradient }}
      />

      <div className="relative rounded-[24px] bg-background">
        <p
          className="text-sm leading-[150%] pt-1 px-2 pb-0.5 w-fit"
          style={{
            backgroundImage: styles.textGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {experience}
        </p>
      </div>
    </div>
  );
}
